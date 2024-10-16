import React, { Children, Component, cloneElement } from 'react'
import { ConnectDropTarget } from 'react-dnd'
import { classnames } from './utils/classnames'
import './tree-node.css'
import { TreeItem, TreePath } from '.'

export interface TreeNode {
  node: TreeItem
}

export interface FlatDataItem extends TreeNode, TreePath {
  lowerSiblingCounts: number[]
  parentNode: TreeItem
}

export interface TreeRendererProps {
  treeIndex: number
  treeId: string
  swapFrom?: number | undefined
  swapDepth?: number | undefined
  swapLength?: number | undefined
  scaffoldBlockPxWidth: number
  lowerSiblingCounts: number[]
  rowdirection?: 'ltr' | 'rtl' | string | undefined
  rowheight: number | ((treeIndex: number, node: any, path: any[]) => number)

  listIndex: number
  children: JSX.Element[]
  style?: React.CSSProperties | undefined

  // Drop target
  connectDropTarget: ConnectDropTarget
  isOver: boolean
  canDrop?: boolean | undefined
  draggedNode?: TreeItem | undefined

  // used in dndManager
  getPrevRow: () => FlatDataItem | undefined
  node: TreeItem
  path: number[]
}

const defaultProps = {
  swapFrom: undefined,
  swapDepth: undefined,
  swapLength: undefined,
  canDrop: false,
  draggedNode: undefined,
  rowdirection: 'ltr',
}

class TreeNodeComponent extends Component<TreeRendererProps> {
  render() {
    const props = { ...defaultProps, ...this.props }
    const {
      children,
      listIndex,
      swapFrom,
      swapLength,
      swapDepth,
      scaffoldBlockPxWidth,
      lowerSiblingCounts,
      connectDropTarget,
      isOver,
      draggedNode,
      canDrop,
      treeIndex,
      rowheight,
      treeId: _treeId, // Delete from otherProps
      getPrevRow: _getPrevRow, // Delete from otherProps
      node: _node, // Delete from otherProps
      path: _path, // Delete from otherProps
      rowdirection,
      ...otherProps
    } = props

    const rowdirectionClass = rowdirection === 'rtl' ? 'rst__rtl' : undefined

    // Construct the scaffold representing the structure of the tree
    const scaffoldBlockCount = lowerSiblingCounts.length
    const scaffold: any[] = []
    for (const [i, lowerSiblingCount] of lowerSiblingCounts.entries()) {
      let lineClass = ''
      if (lowerSiblingCount > 0) {
        // At this level in the tree, the nodes had sibling nodes further down

        if (listIndex === 0) {
          // Top-left corner of the tree
          // +-----+
          // |     |
          // |  +--+
          // |  |  |
          // +--+--+
          lineClass = 'rst__lineHalfHorizontalRight rst__lineHalfVerticalBottom'
        } else if (i === scaffoldBlockCount - 1) {
          // Last scaffold block in the row, right before the row content
          // +--+--+
          // |  |  |
          // |  +--+
          // |  |  |
          // +--+--+
          lineClass = 'rst__lineHalfHorizontalRight rst__lineFullVertical'
        } else {
          // Simply connecting the line extending down to the next sibling on this level
          // +--+--+
          // |  |  |
          // |  |  |
          // |  |  |
          // +--+--+
          lineClass = 'rst__lineFullVertical'
        }
      } else if (listIndex === 0) {
        // Top-left corner of the tree, but has no siblings
        // +-----+
        // |     |
        // |  +--+
        // |     |
        // +-----+
        lineClass = 'rst__lineHalfHorizontalRight'
      } else if (i === scaffoldBlockCount - 1) {
        // The last or only node in this level of the tree
        // +--+--+
        // |  |  |
        // |  +--+
        // |     |
        // +-----+
        lineClass = 'rst__lineHalfVerticalTop rst__lineHalfHorizontalRight'
      }

      scaffold.push(
        <div
          key={`pre_${1 + i}`}
          style={{ width: scaffoldBlockPxWidth }}
          className={classnames(
            'rst__lineBlock',
            lineClass,
            rowdirectionClass ?? ''
          )}
        />
      )

      if (treeIndex !== listIndex && i === swapDepth) {
        // This row has been shifted, and is at the depth of
        // the line pointing to the new destination
        let highlightLineClass = ''

        if (listIndex === swapFrom! + swapLength! - 1) {
          // This block is on the bottom (target) line
          // This block points at the target block (where the row will go when released)
          highlightLineClass = 'rst__highlightBottomLeftCorner'
        } else if (treeIndex === swapFrom) {
          // This block is on the top (source) line
          highlightLineClass = 'rst__highlightTopLeftCorner'
        } else {
          // This block is between the bottom and top
          highlightLineClass = 'rst__highlightLineVertical'
        }

        const style =
          rowdirection === 'rtl'
            ? {
                width: scaffoldBlockPxWidth,
                right: scaffoldBlockPxWidth * i,
              }
            : {
                width: scaffoldBlockPxWidth,
                left: scaffoldBlockPxWidth * i,
              }

        scaffold.push(
          <div
            key={i}
            style={style}
            className={classnames(
              'rst__absoluteLineBlock',
              highlightLineClass,
              rowdirectionClass ?? ''
            )}
          />
        )
      }
    }

    const style =
      rowdirection === 'rtl'
        ? { right: scaffoldBlockPxWidth * scaffoldBlockCount }
        : { left: scaffoldBlockPxWidth * scaffoldBlockCount }

    let calculatedRowHeight = rowheight
    if (typeof rowheight === 'function') {
      calculatedRowHeight = rowheight(treeIndex, _node, _path)
    }
    return connectDropTarget(
      <div
        {...otherProps}
        style={{ height: `${calculatedRowHeight}px` }}
        className={classnames('rst__node', rowdirectionClass ?? '')}
        //@ts-ignore
        ref={(node) => (this.node = node)}>
        {scaffold}

        <div className="rst__nodeContent" style={style}>
          {Children.map(children, (child: any) =>
            cloneElement(child, {
              isOver,
              canDrop,
              draggedNode,
            })
          )}
        </div>
      </div>
    )
  }
}

export default TreeNodeComponent
