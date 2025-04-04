// Demo interactiv pentru grafuri
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const nodes = [
        { id: 'A', x: 100, y: 100 },
        { id: 'B', x: 200, y: 200 },
        { id: 'C', x: 300, y: 100 },
        { id: 'D', x: 200, y: 50 }
    ];

    const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'D'],
        ['C', 'D']
    ];

    function drawGraph() {
        // Desenăm muchiile
        edges.forEach(edge => {
            const nodeA = nodes.find(node => node.id === edge[0]);
            const nodeB = nodes.find(node => node.id === edge[1]);

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
        });

        // Desenăm nodurile
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "#3498db";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "white";
            ctx.fillText(node.id, node.x - 5, node.y + 5);
        });
    }

    drawGraph();
});
