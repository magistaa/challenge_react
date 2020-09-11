import React from 'react';


class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            nilai1: null,
            nilai2: null,
            operator: null,
            hasil: null

        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const nilai1 = parseInt(this.refs.nilai1.value);
        const nilai2 = parseInt(this.refs.nilai2.value);
        const operator =this.refs.operator.value ;
        let hasil;

        switch(operator){
            case '+':
                hasil = nilai1 + nilai2
                break;
            case '-':
                hasil = nilai1 - nilai2
                break;
            case '*':
                hasil = nilai1 * nilai2
                break;
            case '/':
                hasil = nilai1 / nilai2
                break;
        }
        this.setState({
            nilai1,nilai2,operator,hasil
        });

        this.refs.nilai1.value = null;
        this.refs.nilai2.value = null;
    

    }
    renderHasil = () => {
        const {nilai1,nilai2,operator,hasil} = this.state;
        if (this.state.hasil){
            return(
                <div>
                    <p>{nilai1 + operator + nilai2 + "=" + hasil} </p>
                </div>
            )

        }
    }

    render (){
        return(
            <div className="container">
                <br></br>
                <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title"><center>Nilai 1</center></h5>
      <input type="Number" ref="nilai1" className="form-control" ></input>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><center>Nilai 2</center></h5>
        <input type="Number" ref="nilai2" className="form-control"></input>
       
      </div>
    </div>
  </div>
</div>
<br></br>

<div class="card">
  <div class="card-header">
    <center><h5>operator</h5></center>
  </div>
  <div class="card-body">
                    <select ref="operator" className="form-control">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
  </div>
</div>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <center><button class="btn btn-primary mb-2"> Hasil </button></center>
                </form>
                <div className="form-control">  
                 {this.renderHasil()}
                 </div>
            </div>
            
            
          );
    }
}

export default Calculator;