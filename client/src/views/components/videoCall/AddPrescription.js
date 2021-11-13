import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router"
import { createMedicine } from '../../../actions/Medicine';
import { getAllUsers } from '../../../actions/Users';

const AddPrescription = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const users = useSelector((state) => state.users)
    const location = useLocation()
    const { patientId } = location.state

    useEffect(() => {
        dispatch(getAllUsers())
    }, dispatch)

    const [medicineData, setMedicineData] = useState({
        doctorId: localUser?.result?._id,
        patientId: patientId,
        name: '',
        quantity: '',
        days: '',
        morning: 'no',
        afternoon: 'no',
        night: 'no',
        test: 'no'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createMedicine(medicineData))
        clear()
    }
    const clear = () => {
        setMedicineData({
            doctorId: '',
            patientId: '',
            name: '',
            quantity: '',
            days: '',
            morning: 'no',
            afternoon: 'no',
            night: 'no',
            test: 'no'
        })
    }

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">
                                    Add Prescription for &nbsp;
                                    {users.map((user) => (
                                        user._id === patientId && (user.name)
                                    ))}
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="card card-table">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-center">
                                                <thead>
                                                    <tr>
                                                        <th>Medicine</th>
                                                        <th>Quantity</th>
                                                        <th>Days</th>
                                                        <th>Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input class="form-control" type="text" value={medicineData.name} onChange={(e) => setMedicineData({ ...medicineData, name: e.target.value })} />
                                                        </td>
                                                        <td>
                                                            <input class="form-control" type="text" value={medicineData.quantity} onChange={(e) => setMedicineData({ ...medicineData, quantity: e.target.value })} />
                                                        </td>
                                                        <td>
                                                            <input class="form-control" type="text" value={medicineData.days} onChange={(e) => setMedicineData({ ...medicineData, days: e.target.value })} />
                                                        </td>
                                                        <td>
                                                            <div class="form-check form-check-inline">
                                                                <label class="form-check-label">
                                                                    <input class="form-check-input" name="morning" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, morning: e.target.value })} />
                                                                    Morning
                                                                </label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <label class="form-check-label">
                                                                    <input class="form-check-input" name="afternoon" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, afternoon: e.target.value })} />
                                                                    Afternoon
                                                                </label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <label class="form-check-label">
                                                                    <input class="form-check-input" name="night" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, night: e.target.value })} />
                                                                    Night
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <thead>
                                                    <tr>
                                                        <th>Test</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="clinic-booking">
                                                                <select name="test" id="test" className="apt-btn" onChange={(e) => setMedicineData({ ...medicineData, test: e.target.value })} >
                                                                    <option value="select">Test </option>
                                                                    <option value="cbc">CBC</option>
                                                                    <option value="lft">LFT</option>
                                                                    <option value="xray">X-Ray</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="submit-section">
                                            <button type="submit" class="btn btn-primary submit-btn" onClick={handleSubmit}>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPrescription
