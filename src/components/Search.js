import SearchItem from './SeachItem';
import SortItem from './SortItem';
import AddItem from './AddItem';
import ItemName from './ItemName';
import ButtonItem from './ButtonItem';
function Search()  {

    return (
        <div>
        <h1>Project 01 - To Do List<a> ReactJS</a></h1>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <SearchItem />
          </div>
          <div className="col-md-3">
            <SortItem />
          </div>  
          <div className="col-md-5">
            <AddItem />
          </div>
        </div>
      </div>

      <div className="container-fluid">
         <div className="row">
         <div className="col-md-7">
          </div>
          <div className="col-md-5 item">
      <ItemName />
      <ButtonItem/>
      </div>
     
          </div>
          </div>
          </div>
        );
    }

export default Search;
