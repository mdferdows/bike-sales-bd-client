import React from 'react';

const Pay = () => {
    return (
        <div>
            <h2 className="  AddServiceHeader p-3  mx-auto mt-1">Make Payment</h2>
            {/* <img src={commingSoon} alt="" className="w-50"/> */}
            <form>
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputbank" class="form-label">Bank account</label>
                    <input type="text" class="form-control" id="exampleInputbank" aria-describedby="bankHelp" />

                </div>

                <div class="mb-3">
                    <label for="exampleInputid" class="form-label">Transaction id</label>
                    <input type="text" class="form-control" id="exampleInputid" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Pay;