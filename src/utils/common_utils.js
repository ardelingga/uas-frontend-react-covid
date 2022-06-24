
const CommonUtils =  {
    stringToPascalCase: (text) => {
        return text
        .replace(/(\w)(\w*)/g,
        function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
    },
    formatNumber: (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

export default CommonUtils;