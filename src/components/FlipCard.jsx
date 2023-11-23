/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function FlipCard({
	title = "Card Title",
	body = "Card Body",
	backTitle = "Back Title",
	backBody = ["Back Body"],
	transition = 0.5,
	direction="Y",
	bgColor="black",
	zIndex = 0,
	height = window.innerWidth < 768 ? 500 : 700,
	width = window.innerWidth < 768 ? 300 : 500,
	frontQuote = false,
	backQuote = false,
	blur=0,
}
) {	

	const [flipped, setFlipped] = useState(false);
	
	function flipOver(){
		setFlipped(!flipped);
	}

	function showFront(){
		setFlipped(true)
	}

	function showBack(){
		setFlipped(false)
	}

	function calcDegrees(flipped){
		return flipped ? 0 : 180;
	}

	return (
	<div style={{position:"relative", width: width, height: height, display: "flex", margin: "2rem", color:"white"}}
		onMouseEnter={() => showFront()}
		onMouseLeave={() => showBack()}
	>
	  <Card 
		className="flex justify-center items-center"
		style={{
			width:"100%", 
            height: window.innerWidth < 768 ? 500 : '100%' , 
            zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position:window.innerWidth < 768 ? 'relative' : "absolute",
			backgroundColor: bgColor,
			padding: "2rem",
			transform: `rotate${direction}(${calcDegrees(flipped)}deg)`,
			overflow:"hidden",
			backdropFilter:`blur(${blur})`
		}}
	  >
		
		{backQuote &&( 
            <div  className="grid grid-cols-3 gap-5" >
                {backBody.map((img,idx) => (
				        <img key={idx} width={56}  src={img} alt="language" />
                ))}
            </div>
                
                
		)}
	  </Card>

	  <Card 
		className="flex justify-center items-center"
		style={{
			width:"100%", 
            height:window.innerWidth < 768 ? 500 : '100%', 
            zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position: "absolute",
			backgroundColor: bgColor,
			padding: "2rem",
			transform: `rotate${direction}(${calcDegrees(!flipped)}deg)`,
			overflow: "hidden",
			backdropFilter: `blur(${blur})`
		}}
	  >
		{!frontQuote && ( <>
			<Card.Title>{title}</Card.Title>
			{body}
			</>
		)}
		{frontQuote && (
			<blockquote className="blockquote" style={{fontSize: "1rem"}}>
				<p>&ldquo;{body}&rdquo;</p>
				<footer className="blockquote-footer text-center mt-1">{title}</footer>
			</blockquote>
		)}
	  </Card>
	</div>
	)
}
