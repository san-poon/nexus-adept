
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import KatexRenderer from './KatexRenderer';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DynamicTextarea } from '@/components/ui/DynamicTextarea';
import { Button } from '@/components/ui/button';

type Props = {
    initialEquation?: string;
    onConfirm: (equation: string, inline: boolean) => void;
};

export default function KatexEquationAlterer({
    onConfirm,
    initialEquation = '',
}: Props): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const [equation, setEquation] = useState<string>(initialEquation);
    const [inline, setInline] = useState<boolean>(true);

    const onClick = useCallback(() => {
        onConfirm(equation, inline);
    }, [onConfirm, equation, inline]);

    const onCheckboxChange = useCallback(() => {
        setInline(!inline);
    }, [setInline, inline]);

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
                <Label>Inline</Label>
                <Input
                    type="checkbox"
                    checked={inline}
                    onChange={onCheckboxChange}
                    className="w-6 h-6 rounded-lg"
                />
            </div>
            <div className="flex flex-col space-y-1 ">
                <Label>Equation</Label>
                {inline ? (
                    <Input
                        onChange={(event) => {
                            setEquation(event.target.value);
                        }}
                        value={equation}
                    />
                ) : (
                    <DynamicTextarea
                        onChange={(event) => {
                            setEquation(event.target.value);
                        }}
                        value={equation}
                    />
                )}
            </div>
            <div className="flex flex-col space-y-1">
                <Label>Visualization</Label>
                <ErrorBoundary onError={(e) => editor._onError(e)} fallback={null}>
                    <KatexRenderer
                        equation={equation}
                        inline={false}
                        onDoubleClick={() => null}
                    />
                </ErrorBoundary>
            </div>
            <div className="flex justify-right">
                <Button onClick={onClick}>Confirm</Button>
            </div>
        </div>
    );
}