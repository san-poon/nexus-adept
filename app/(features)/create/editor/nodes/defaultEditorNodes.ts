import type { Klass, LexicalNode } from 'lexical';

import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { MarkNode } from '@lexical/mark';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import { ImageNode } from './ImageNode';
import { EquationNode } from './EquationNode';
import { CollapsibleContentNode } from '../plugins/collapsible/CollapsibleContentNode';
import { CollapsibleContainerNode } from '../plugins/collapsible/CollapsibleContainerNode';
import { CollapsibleTitleNode } from '../plugins/collapsible/CollapsibleTitleNode';

const defaultEditorNodes: Array<Klass<LexicalNode>> = [
  CollapsibleContentNode,
  CollapsibleContainerNode,
  CollapsibleTitleNode,
  EquationNode,
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode,
  AutoLinkNode,
  HorizontalRuleNode,
  ImageNode,
  MarkNode,
  TableNode,
  TableCellNode,
  TableRowNode,
];

export default defaultEditorNodes;