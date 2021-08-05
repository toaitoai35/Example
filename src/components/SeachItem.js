
import './style.css';

function SearchItem() {
  return (
    <div class="search">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search item name" />
              <div class="input-group-append">
                <button class="btn btn-primary mb-2" type="button">Clear</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group mb-2">
              <div class="input-group">
                <select name="status" class="form-control">
                  <option value="1">Sort by</option>
                  <option value="2">InProgress</option>
                </select>
                <button class="btn btn-success mb-2 name" type="button">NAME-DESC</button>

              </div>
            </div>
          </div>
          <div class="col-md-5">
            <button type="submit" class="btn btn-primary col-11 add">Add Item</button>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-6">
          </div>
          <div class="col-md-5 sub">
          <div class="input-group">
          <input type="text" class="form-control col-5 s" placeholder="Item name" />
          <select name="status" class="form-control col-2" >
              <option value="1">Small</option>
              <option value="2">Hight</option>
            </select>
            <button class="btn btn-info mb-2 h" type="button">Submit</button>
            <button class="btn btn-outline-secondary mb-2 h" type="button">Cancel</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
