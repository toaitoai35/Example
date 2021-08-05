
import './style.css';

function SearchItem() {
  return (
    <div className="search">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search item name" />
              <div className="input-group-append">
                <button className="btn btn-primary mb-2" type="button">Clear</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group mb-2">
              <div className="input-group">
                <select name="status" className="form-control">
                  <option value="1">Sort by</option>
                  <option value="2">InProgress</option>
                </select>
                <button className="btn btn-success mb-2 name" type="button">NAME-DESC</button>

              </div>
            </div>
          </div>
          <div className="col-md-5">
            <button type="submit" className="btn btn-primary col-11 add">Add Item</button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-6">
          </div>
          <div className="col-md-5 sub">
          <div className="input-group">
          <input type="text" className="form-control col-5 s" placeholder="Item name" />
          <select name="status" className="form-control col-2" >
              <option value="1">Small</option>
              <option value="2">Hight</option>
            </select>
            <button className="btn btn-info mb-2 h" type="button">Submit</button>
            <button className="btn btn-outline-secondary mb-2 h" type="button">Cancel</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
