import {
    $applyNodeReplacement,
    createEditor,
    DecoratorNode,
    DOMConversionMap,
    DOMConversionOutput,
    DOMExportOutput,
    EditorConfig,
    LexicalEditor,
    LexicalNode,
    NodeKey,
    SerializedEditor,
    SerializedLexicalNode,
    Spread,
} from "lexical";
import React from "react";
import { Suspense } from "react";

const ImageComponent = React.lazy(() => import('./ImageComponent'));


export interface ImagePayload {
    altText: string;
    caption?: LexicalEditor;
    height?: number;
    key?: NodeKey;
    maxWidth?: number;
    showCaption?: boolean;
    src: string;
    width?: number;
    captionsEnabled?: boolean;
}



export type SerializedImageNode = Spread<
    {
        altText: string;
        caption: SerializedEditor;
        height?: number;
        maxWidth: number;
        showCaption: boolean;
        src: string;
        width?: number;
    },
    SerializedLexicalNode
>;

export class ImageNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __altText: string;
    __width: 'inherit' | number;
    __height: 'inherit' | number;
    __maxWidth: number;
    __showCaption: boolean;
    __caption: LexicalEditor;
    // Captions cannot yet be used within editor cells
    __captionsEnabled: boolean;

    constructor(
        src: string,
        altText: string,
        maxWidth: number,
        width?: 'inherit' | number,
        height?: 'inherit' | number,
        showCaption?: boolean,
        caption?: LexicalEditor,
        captionsEnabled?: boolean,
        key?: NodeKey,
    ) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__maxWidth = maxWidth;
        this.__width = width || 'inherit';
        this.__height = height || 'inherit';
        this.__showCaption = showCaption || false;
        this.__caption = caption || createEditor({
            nodes: [],
        });
        this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined;
    }

    static getType(): string {
        return 'image';
    }

    static clone(node: ImageNode): ImageNode {
        return new ImageNode(
            node.__src,
            node.__altText,
            node.__maxWidth,
            node.__width,
            node.__height,
            node.__showCaption,
            node.__caption,
            node.__captionsEnabled,
            node.__key,
        );
    }

    exportJSON(): SerializedImageNode {
        return {
            caption: this.__caption.toJSON(),
            maxWidth: this.__maxWidth,
            showCaption: this.__showCaption,
            type: 'image',
            version: 1,
            src: this.getSrc(),
            altText: this.getAltText(),
            height: this.__height === 'inherit' ? 0 : this.__height,
            width: this.__width === 'inherit' ? 0 : this.__width,
        }
    }

    static importJSON(serializedNode: SerializedImageNode): ImageNode {
        const { altText, height, width, maxWidth, caption, src, showCaption } = serializedNode;

        const node = $createImageNode({
            altText,
            height,
            maxWidth,
            showCaption,
            src,
            width,
        });
        const nestedEditor = node.__caption;
        const editorState = nestedEditor.parseEditorState(caption.editorState);
        if (!editorState.isEmpty()) {
            nestedEditor.setEditorState(editorState);
        }
        return node;
    }

    exportDOM(): DOMExportOutput {
        const element = document.createElement('img');
        element.setAttribute('src', this.__src);
        element.setAttribute('alt', this.__altText);
        element.setAttribute('width', this.__width.toString());
        element.setAttribute('height', this.__height.toString());
        return { element };
    }

    static importDOM(): DOMConversionMap | null {
        return {
            img: (node: Node) => ({
                conversion: $convertImageElement,
                priority: 0,
            }),
        };
    }

    setWidthAndHeight(
        width: 'inherit' | number,
        height: 'inherit' | number,
    ): void {
        const writable = this.getWritable();
        writable.__width = width;
        writable.__height = height;
    }

    setShowCaption(showCaption: boolean): void {
        const writable = this.getWritable();
        writable.__showCaption = showCaption;
    }

    //View

    createDOM(config: EditorConfig): HTMLElement {
        const span = document?.createElement('span');
        const theme = config.theme;
        const className = theme.image;
        if (className !== undefined) {
            span.className = className;
        }
        return span;
    }

    updateDOM(): false {
        return false;
    }

    getSrc(): string {
        return this.__src;
    }
    getAltText(): string {
        return this.__altText;
    }

    decorate(): JSX.Element {
        return (
            <Suspense fallback={null}>
                <ImageComponent
                    src={this.__src}
                    altText={this.__altText}
                    width={this.__width}
                    height={this.__height}
                    maxWidth={this.__maxWidth}
                    nodeKey={this.getKey()}
                    showCaption={this.__showCaption}
                    captionsEnabled={this.__captionsEnabled}
                    caption={this.__caption}
                    resizable={true}
                />
            </Suspense>
        )
    }
}

function $convertImageElement(domNode: Node): null | DOMConversionOutput {
    const img = domNode as HTMLImageElement;
    if (img.src.startsWith('file: ///') || isGoogleDocCheckboxImg(img)) {
        return null;
    }

    const { alt: altText, src, width, height } = img;
    const node = $createImageNode({ altText, height, src, width });
    return { node };
}

function isGoogleDocCheckboxImg(img: HTMLImageElement): boolean {
    return (
        img.parentElement != null &&
        img.parentElement.tagName === 'LI' &&
        img.previousSibling === null &&
        img.getAttribute('aria-roledescription') === 'checkbox'
    );
}

export function $createImageNode({
    altText,
    height,
    maxWidth = 500,
    captionsEnabled,
    src,
    width,
    showCaption,
    caption,
    key,
}: ImagePayload): ImageNode {
    return $applyNodeReplacement(
        new ImageNode(
            src,
            altText,
            maxWidth,
            width,
            height,
            showCaption,
            caption,
            captionsEnabled,
            key,
        )
    )
}

export function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode {
    return node instanceof ImageNode;
}