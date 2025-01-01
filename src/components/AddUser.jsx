import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useForm } from 'react-hook-form';

function AddUser() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="content">
                <div className="m-4 mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4 className='heading'>{t('adduser')}</h4>
                        <div class="form">
                            <label className='inputLabel'>{t('name')}</label>
                            <input {...register("firstname" , {required: true})} className="input"/>
                                {errors.firstname && <span class="red_text">This field is required</span>}
                            <label className='inputLabel'>{t('gender')}</label>
                            
                            <select class="input" {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            
                            <label className="">Date Of Birth</label>
                            <input id="dob" type="date" className="input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
                            
                            <label>Phone Number</label>
                            <PhoneInput inputClass='numberInput' className="" country="in" value={phone} onChange={setPhone} {...register("phonenumber" , {required: true})}/>
                            {errors.phonenumber && <span class="red_text">Please Enter Phone Number</span>}
                            
                            <label>Email</label>
                            <input placeholder='abcdef@gmail.com' className="input"></input>
                            
                            <label>Address</label>
                            <textarea class="input"></textarea>
                            
                            <div className='flex justify-center mt-5'>
                                <input className='submitButton' type="submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUser