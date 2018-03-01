class ColorPicker extends React.Component{
	constructor(props,context){
		super(props,context);
		
		this.state={
			colorInput:"#F6F6F6",
			colorOutput:"#F6F6F6"
		}; 

		this.colorChange=this.colorChange.bind(this);	
		this.handleSubmit=this.handleSubmit.bind(this);	
	}

	colorChange (e){
		this.setState(
			{colorInput:e.target.value}
		);
	}
	handleSubmit(e){
		e.preventDefault();
		this.setState(
			{colorOutput:this.state.colorInput}
		);
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Color Picker :</label>
					<input type="color"
								 onChange={this.colorChange} 
								 value={this.state.colorInput} 
								 style={{color:this.state.colorOutput}} />
					<button>Submit</button>
				</form>
				<div id="photo" style=	{{"backgroundColor":this.state.colorOutput}} ></div>
			</div>
		)
	}
}
ReactDOM.render(
	<ColorPicker />,
	document.getElementById("app")
);   