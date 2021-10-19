import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMedicine } from '../../../actions/Medicine'

const AddPrescription = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))

    const [medicineData, setMedicineData] = useState({
        doctorId: localUser?.result?._id,
        patientId: '',
        name: '',
        quantity: '',
        days: '',
        morning: 'null',
        afternoon: 'null',
        night: 'null',
        test: 'null'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createMedicine(medicineData))
        alert(JSON.stringify(medicineData))
        clear()
    }
    const clear = () => {
        setMedicineData({
            doctorId: '',
            patientId: '',
            name: '',
            quantity: '',
            days: '',
            morning: 'null',
            afternoon: 'null',
            night: 'null',
            test: 'null'
        })
    }

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Add Prescription</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="biller-info">
                                            <h4 class="d-block">Patient name</h4>
                                        </div>
                                    </div>
                                </div>
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
                                                                    <input class="form-check-input" name="morning" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, morning: e.target.value })} checked={medicineData.morning === 'on' ? true : false} />
                                                                    Morning
                                                                </label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <label class="form-check-label">
                                                                    <input class="form-check-input" name="afternoon" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, afternoon: e.target.value })} checked={medicineData.afternoon === 'on' ? true : false} />
                                                                    Afternoon
                                                                </label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <label class="form-check-label">
                                                                    <input class="form-check-input" name="night" type="checkbox" onChange={(e) => setMedicineData({ ...medicineData, night: e.target.value })} checked={medicineData.night === 'on' ? true : false} />
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
