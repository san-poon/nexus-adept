import {
    Node,
    CoordinateExtent
} from 'reactflow';
/**
 * This function returns the 'max' coordinates user can extend to.
 * Do Not use this function when 'nodes' change dynamically. 
 * @param nodes It's a ReactFlow Node
 * @returns CoordinateExtent which has the defined structure.
 */
export function findBoundingBox(nodes: Node[]): CoordinateExtent {
    let smallestX = Infinity;
    let smallestY = Infinity;
    let largestX = -Infinity;
    let largestY = -Infinity;

    for (const node of nodes) {
        smallestX = Math.min(smallestX, node.position.x);
        smallestY = Math.min(smallestY, node.position.y);
        largestX = Math.max(largestX, node.position.x);
        largestY = Math.max(largestY, node.position.y);
    }
    // Catering to the need of 4k display (hahaha)
    return [[smallestX - 2000, smallestY - 200], [largestX + 2000, largestY + 200]];
}