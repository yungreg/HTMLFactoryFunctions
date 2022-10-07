const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}
// note: with these object literals, inside the backticks you dont have to put the strings inside single or double quotes, unless you specifically need that to show (like on teh computer ID below). 9:51am 8/26/22  
// side note: wqould the id tah that i'm tryping into the html here automattically work as an ID for CSS if there's a correspionding HTML file that this might print to?
const laptopSpecs = (computerObject) => {
    const laptopSpecsHTML = `<section id="computer--${computer.id}">\n\t<h1>${computer.manufacturer} ${computer.make}</h1>\n\t<div>Model: ${computer.model}</div>\n\t<div>Memory: ${computer.specs.memory}</div>\n\t<div>HDD Space: ${computer.specs.hardDrive}</div>\n\t<div>Processor Speed: ${computer.specs.processor}</div>\n</section>`
    return laptopSpecsHTML
}

// goal: make this print from yout function:
{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}

let laptopSpecsHTMLString = laptopSpecs(computer)
console.log(laptopSpecsHTMLString)