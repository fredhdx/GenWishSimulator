import './App.css';
// import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from "react";

import * as d3 from 'd3'

// commented out because bugs in code
// import { ToastContainer, toast } from 'react-toastify';

import stateData from './data/stateGeo.json';
import countyData from './data/countyGeo.json';

const mapRatio = 0.5
const margin = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10
}

const colorScale = ["#B9EDDD", "#87CBB9", "#569DAA", "#577D86"];

function App() {

  // A random color generator
  const colorGenerator = () => {
    return colorScale[Math.floor(Math.random() * 4)]
  }

  useEffect(() => {

    console.log('called once')

    // select .viz container, get window width
    let width = parseInt(d3.select('.viz').style('width'))
    let height = width * mapRatio
    // interaction 
    let active = d3.select(null); 

    width = width - margin.left - margin.right

    // build svg under .viz
    const svg = d3.select('.viz').append('svg')
      .attr('class', 'center-container')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right);

    // add background rect, apply css
    // hierachy is: svg > rect.background
    svg.append('rect')
      .attr('class', 'background center-container')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right)

    // Creating projection, it's best to use 'geoAlbersUsa' projection if you're rendering USA map and for other maps use 'geoMercator'.
    // projection: converts coordinates to x, y pixel points
    const projection = d3.geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(width);

    // Creating path generator fromt the projecttion created above.
    const pathGenerator = d3.geoPath()
      .projection(projection);

    // add center-container gropu to svg
    // note: this group is containing group for all paths, and is parallel with background rect
    // hierachy is: svg > g.center-container
    const g = svg.append("g")
      .attr('class', 'center-container center-items us-state')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    // add counties group to center-container group
    // inside this group, we add all county paths by selectAll -> data -> append -> attr
    // hierachy is: svg > g.center-container > g.counties
    g.append("g")
      .attr("id", "counties")
      .selectAll("path")
      .data(countyData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("key", feature => { // key binding for each path to data entry, if you alter data, you alter paths
        return feature.properties.STATE + feature.properties.COUNTY;
      })
      .attr("class", "county-boundary")
      .attr("fill", (feature) => {
        // author: 
        // I could directly call colorGenerator instead of calling it in a arrow function, 
        // I've added it in that way so that you'd know we can send values from geo json into every step of the map creation.
        return colorGenerator()
      })
      .on("click", resetZoom); // add click event

    // add states group to center-container group
    // this group is in parallel with counties group
    // same ideas to add state paths
    // hierachy is: svg > g.center-container > g.states
    g.append("g")
      .attr("id", "states")
      .selectAll("path")
      .data(stateData.features)
      .enter()
      .append("path")
      .attr("key", feature => { // feature is passed down to click event as well (should...look for d3 doc on parameter passing)
        return feature.properties.NAME
      })
      .attr("d", pathGenerator)
      .attr("class", "state")
      .attr("fill", colorGenerator)
      .on("click", handleZoom);

    function handleZoom(stateFeature) {
      console.log('handleZoom called')
      // Set the state backgroud to 'none' so that the counties can be displayed.
      active.classed("active", false);
      active = d3.select(this).classed("active", true);


      // below doesn't work
      // apparently parameter passing is set up wrong.
      // stateFeature is not passed
      // but it'

      // toast.info(`Selected state is ${stateFeature.properties.NAME}`, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      // Call to zoom in.
      zoomIn(stateFeature)
    }

    function zoomIn(currentState) {

      console.log('zoomIn called')
      // Get bounding box values for the selected county.
      let bounds = pathGenerator.bounds(currentState);

      // Zoom In calculations
      let dx = bounds[1][0] - bounds[0][0];
      let dy = bounds[1][1] - bounds[0][1];

      let x = (bounds[0][0] + bounds[1][0]) / 2;
      let y = (bounds[0][1] + bounds[1][1]) / 2;

      let scale = .9 / Math.max(dx / width, dy / height);
      let translate = [width / 2 - scale * x, height / 2 - scale * y];

      // Updaing the css using D3
      g.transition()
        .duration(750)
        .style("stroke-width", 1.5 / scale + "px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    }

    function resetZoom() {

      console.log('resetZoom called')

      // Remove the active class so that state color will be restored and conuties will be hidden again.
      active.classed("active", false);
      active = d3.select(null);

      // Resetting the css using D3
      g.transition()
        .delay(100)
        .duration(750)
        .style("stroke-width", "1.5px")
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    }
  }, []);

  return (
    <div>
      <div className="viz">
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
