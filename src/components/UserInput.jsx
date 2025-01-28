import "../App.css"
const UserInput = () => {
    return (
      <section className="user-input bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <label 
                htmlFor="initialInvestment" 
                className="block text-white  mb-3 font-semibold uppercase tracking-wide text-sm"
              >
                Initial Investment
              </label>
              <input 
                type="number" 
                id="initialInvestment" 
                className="input-field"
                placeholder="Enter amount"
                min="1"
                
              />
            </div>
            <div className="mb-8">
              <label 
                htmlFor="annualInvestment" 
                className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide"
              >
                Annual Investment
              </label>
              <input 
                type="number" 
                id="annualInvestment" 
                className="input-field"
                placeholder="Enter amount"
                min="100"
                
              />
            </div>
          </div>
          <div>
            <div className="mb-8">
              <label 
                htmlFor="expectedReturns" 
                className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide"
              >
                Expected Returns (%)
              </label> 
              <input 
                type="number" 
                id="expectedReturns" 
                className="input-field"
                placeholder="Enter percentage"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div className="mb-8">
              <label 
                htmlFor="duration" 
                className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide"
              >
                Duration (Years)
              </label>
              <input 
                type="number" 
                id="duration" 
                className="input-field"
                placeholder="Enter years"
                min="1"
                max="50"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UserInput;