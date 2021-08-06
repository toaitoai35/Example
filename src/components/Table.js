import './style.css';
import ButtonAction from './ButtonAction';
function Table() {
    return (
        <div className="container-fluid Table">
            <table className="table border">
                <thead className="table-success">
                    <tr>
                        <th scope="col">List Item</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Level</th>
                        <th scope="col">Action</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp</td>
                        <td><span className="bg-secondary text-white red">Small</span></td>
                        <td>
                            <ButtonAction/>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp</td>
                        <td><span className="bg-danger text-white red">High</span></td>
                        <td><ButtonAction/>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp</td>
                        <td><span className="bg-info text-white red">Medium</span></td>
                        <td>
                        <ButtonAction/>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td> <input type="text" className="form-control" placeholder="Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp" /></td>
                        <td><select name="status" className="form-control">
                            <option value="1">Small</option>
                            <option value="2"></option>
                        </select></td>
                        <td><div className="input-group">
                            <button className="btn btn-outline-secondary mb-2" type="button">Cancel</button>
                            <button className="btn btn-success mb-2 x" type="button">Save</button>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}

export default Table;
