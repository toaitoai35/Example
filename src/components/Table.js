import './style.css';
function Table() {
    return (
        <div className="container-fluid Table">
            <table class="table border">
                <thead class="table-success">
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
                        <td><span class="bg-secondary text-white red">Small</span></td>
                        <td><div class="input-group">
                            <button class="btn btn-warning mb-2" type="button">Edit</button>
                            <button class="btn btn-danger mb-2 h" type="button">Delete</button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp</td>
                        <td><span class="bg-danger text-white red">High</span></td>
                        <td><div class="input-group">
                            <button class="btn btn-warning mb-2" type="button">Edit</button>
                            <button class="btn btn-danger mb-2 h" type="button">Delete</button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp</td>
                        <td><span class="bg-info text-white red">Medium</span></td>
                        <td><div class="input-group">
                            <button class="btn btn-warning mb-2" type="button">Edit</button>
                            <button class="btn btn-danger mb-2 h" type="button">Delete</button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td> <input type="text" class="form-control" placeholder="Ở phần thi nhảy cao thuộc nội dung 10 môn phối hợp" /></td>
                        <td><select name="status" class="form-control">
                            <option value="1">Small</option>
                            <option value="2"></option>
                        </select></td>
                        <td><div class="input-group">
                            <button class="btn btn-outline-secondary mb-2" type="button">Cancel</button>
                            <button class="btn btn-success mb-2 h" type="button">Save</button>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}

export default Table;
