
import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




function form() {
    return (
        <div class="container">
            <div class="col-md-6 ">
                <form className="form-group" class="row g-3">
                    <label> ติดต่อเรื่อง:  </label>
                    <select class="form-control1" id="exampleFormControlSelect1" name = "Head">

                        <option>เเก้บัค</option>
                        <option>จ้างงาน</option>
                        <option>สมัครงาน</option>
                        <option>อื่นๆ</option>

                    </select>
                    <br />

                    <input type="email" class="form-control1" id="exampleFormControlInput1" placeholder="E-mail" name ="email"></input>
                    <br />
                    <input id="Phone" type="text" placeholder="Phone" name ="phone"
                    /><br />
                
                



                    <label for="exampleFormControlTextarea1"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" rows="3" cols="50" placeholder="Description" name ="Discription"> </textarea>
                    <button type="submit" class="btn btn-primary" id ="Submit" onclick="test()">Submit</button>
                </form>
            </div>
        </div>
        





    );
}


<script src="C:\Users\Acer\Desktop\react test 1\my-app\src\utils\firebase.js"></script>

export default form;

