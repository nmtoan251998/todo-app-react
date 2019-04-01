import React from 'react';

const InputBar = ( {onFormSubmit, onInputChange, value} ) => {
    
    return (        
        <form className="mb-5">
            <div className="row">
                <div className="col-8">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Input a to-do list here" 
                        onChange={onInputChange}
                        value={value} />
                </div>
                <div className="col-1">
                    <button 
                        onClick={onFormSubmit}                        
                        className="btn btn-dark" 
                        type="submit">
                        Add
                    </button>
                </div>
            </div>                
        </form>        
    )
}

export default InputBar;