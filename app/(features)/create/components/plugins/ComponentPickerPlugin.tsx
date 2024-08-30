import { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
    LexicalTypeaheadMenuPlugin,
    MenuOption,
    useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { $setBlocksType } from '@lexical/selection';
import { $createParagraphNode, $getSelection, $isRangeSelection, INSERT_LINE_BREAK_COMMAND, LexicalEditor, TextNode } from 'lexical';
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode';

import { cn } from '@/lib/utils';
import useModal from '@/hooks/useModal';
import { INSERT_TABLE_COMMAND } from '@lexical/table';
import { InsertTableDialog } from './TablePlugin';



export default function ComponentPickerPlugin() {
    const [editor] = useLexicalComposerContext();
    const [modal, showModal] = useModal();
    const [queryString, setQueryString] = useState<string | null>(null);

    const checkForTriggerMatch = useBasicTypeaheadTriggerMatch(
        '/',
        { minLength: 0 },
    );

    const options = useMemo(() => {
        const baseOptions = getBaseOptions(editor, showModal);
        if (!queryString) return baseOptions;
        const regex = new RegExp(queryString, 'i');
        return [
            ...getDynamicOptions(editor, queryString),
            ...baseOptions.filter(
                (option) =>
                    regex.test(option.title) ||
                    option.keywords.some((keyword) => regex.test(keyword))
            ),
        ];
    }, [editor, queryString, showModal]);

    const onSelectOption = useCallback(
        (
            selectedOption: ComponentPickerOption,
            nodeToRemove: TextNode | null,
            closeMenu: () => void,
            matchingString: string,
        ) => {
            editor.update(() => {
                nodeToRemove?.remove();
                selectedOption.onSelect(matchingString);
                closeMenu();
            });
        },
        [editor],
    );

    return (
        <>
            {modal}
            <LexicalTypeaheadMenuPlugin<ComponentPickerOption>
                onQueryChange={setQueryString}
                onSelectOption={onSelectOption}
                triggerFn={checkForTriggerMatch}
                options={options}
                menuRenderFn={(
                    anchorElementRef,
                    { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
                ) =>
                    anchorElementRef.current && options.length
                        ? ReactDOM.createPortal(
                            <div className=" w-40 md:w-60 rounded-xl px-2 py-1 md:px-4 md:py-2 bg-wash-80 dark:bg-wash-750">
                                <ul>
                                    {options.map((option, i: number) => (
                                        <ComponentPickerMenuItem
                                            index={i}
                                            isSelected={selectedIndex === i}
                                            onClick={() => {
                                                setHighlightedIndex(i);
                                                selectOptionAndCleanUp(option);
                                            }}
                                            onMouseEnter={() => {
                                                setHighlightedIndex(i);
                                            }}
                                            key={option.key}
                                            option={option}
                                        />
                                    ))}
                                </ul>
                            </div>,
                            anchorElementRef.current,
                        )
                        : null
                }
            />
        </>
    )


}




type ShowModal = ReturnType<typeof useModal>[1];

function getBaseOptions(editor: LexicalEditor, showModal: ShowModal) {
    return [

        new ComponentPickerOption('Paragraph', {
            icon: <i />,
            keywords: ['p', 'paragraph', 'normal', 'text'],
            onSelect: () =>
                editor.update(() => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        $setBlocksType(selection, () => $createParagraphNode());
                    }
                }),
        }),

        new ComponentPickerOption('Divider', {
            icon: <i />,
            keywords: ['horizontal rule', 'divider', 'hr'],
            onSelect: () =>
                editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined),
        }),

        new ComponentPickerOption('Table', {
            icon: <i />,
            keywords: ['table', 'grid', 'spreadsheet', 'rows', 'columns'],
            onSelect: () =>
                showModal('Insert Table', (onClose) => (
                    <InsertTableDialog activeEditor={editor} onClose={onClose} />
                )),
        }),

    ];
}

function getDynamicOptions(editor: LexicalEditor, queryString: string) {
    const options: Array<ComponentPickerOption> = [];
    if (queryString === null) {
        return options;
    }
    const tableMatch = queryString.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
    if (tableMatch !== null) {
        const rows = tableMatch[1];
        const colOptions = tableMatch[2]
            ? [tableMatch[2]]
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);

        options.push(
            ...colOptions.map(
                (columns) =>
                    new ComponentPickerOption(`${rows}x${columns} Table`, {
                        icon: <i />,
                        keywords: ['table'],
                        onSelect: () =>
                            editor.dispatchCommand(INSERT_TABLE_COMMAND, { columns, rows }),
                    }),
            ),
        );
    }

    return options;
}




class ComponentPickerOption extends MenuOption {
    // What shows up in the editor
    title: string;
    // Icon for display
    icon?: JSX.Element;
    // For extra searching
    keywords: Array<string>
    //TBD
    keyboardShortcut?: string;
    // What happens when you select this option?
    onSelect: (queryString: string) => void;

    constructor(
        title: string,
        options: {
            icon?: JSX.Element;
            keywords?: Array<string>;
            keyboardShortcut?: string;
            onSelect: (queryString: string) => void;
        },
    ) {
        super(title);
        this.title = title;
        this.keywords = options.keywords || [];
        this.icon = options.icon;
        this.keyboardShortcut = options.keyboardShortcut;
        this.onSelect = options.onSelect.bind(this);
    }
}




function ComponentPickerMenuItem({
    index,
    isSelected,
    onClick,
    onMouseEnter,
    option,
}: {
    index: number;
    isSelected: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    option: ComponentPickerOption;
}) {
    return (
        <li
            key={option.key}
            tabIndex={-1}
            className={cn(isSelected ? "px-3 py-1 rounded-3xl bg-wash-150 dark:bg-wash-650" : "px-3 py-1")}
            ref={option.setRefElement}
            role="option"
            aria-selected={isSelected}
            id={'typeahead-item-' + index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            {option.icon}
            <span>{option.title}</span>
        </li>
    )

}