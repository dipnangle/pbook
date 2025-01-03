import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from 'react-hook-form';

function AddUser(props) {
    const { t } = useTranslation();
    const { register, handleSubmit, watch, formState: { errors }, setValue, trigger, control} = useForm();
    const [responseData, setResponseData] = useState(null);

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const onSubmit = async (data) => {

        // data.preventDefault();

        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)  // Send the whole form data
        };
        
        fetch('http://192.168.1.250:5001/api/contacts/adduser', requestOptions)
            .then(response => response.json())
            .then((data) => {
                if(data.title == "done"){
                    props.switch.toaster("success", data.message);
                }
                console.log("response data", data);
                setResponseData(data);
            })
            .catch((error) => {
                if(data.title == "error"){
                    props.switch.toaster("error", data.message);
                }
                console.error("Error", error);
            });

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form submitted");
        } catch (error) {
            console.error("Submission failed");
        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <>
            <div className="content">
                <div className="m-4 mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4 className='heading'>{t('adduser')}</h4>
                        <div class="form">
                            <label className='inputLabel'>{t('name')}</label>
                            <input {...register("full_name" , {required: true})} className="input" />
                                {errors.full_name && <span class="red_text">Please Enter Your Name</span>}
                            <label className='inputLabel'>{t('gender')}</label>
                            <select class="input" {...register("gender")}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            
                            <label className="">Date Of Birth</label>
                            <input id="dob" type="date" className="input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            
                            <label>Phone Number</label>
                           
                            <Controller
                                name="phoneNumber"
                                control={control}
                                rules={{
                                    required: "Phone number is required",
                                    validate: (value) => value.length > 0 || "Invalid phone number",
                                }}
                                render={({ field }) => (
                                    <PhoneInput 
                                        inputClass='numberInput' 
                                        className="" 
                                        country="in"
                                        onChange={(value, country) => {
                                            const numberwithoutcode =  value.replace(`${country.dialCode}`, "");
                                            const countryCode = country.dialCode.startsWith("+") ? country.dialCode : `+${country.dialCode}`;
                                            // setValue("phonenumber", numberwithoutcode , {shouldValidate: true});
                                            setValue("phoneNumber", numberwithoutcode , {shouldValidate: true});
                                            setValue("contrycode", countryCode , {shouldValidate: true});
                                            trigger("phoneNumber");
                                        }}
                                    />
                                )}
                            />
                            {errors.phonenumber && <span class="red_text">Please Enter Phone Number</span>}
                            
                            <label>Email</label>
                            <input {...register("email", {required: true})} placeholder='abcdef@gmail.com' className="input" />
                            {errors.email && <span class="red_text">Please Enter Email Address</span>}
                            
                            <label>Address</label>
                            <textarea {...register("address")} class="input"></textarea>
                            
                            <div className='flex justify-center mt-5'>
                                <button className='submitButton' type="submit">
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUser