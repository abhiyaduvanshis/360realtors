import React from "react";
import axios from 'axios'; 
import { useForm } from "react-hook-form";
function Propertylead_form(post){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios({
            method: "post",
            url: 'https://timesproperty.360realtors.com/apitest/Apitest/leadinsert',
            headers: { "content-type": "application/json" },
            data: data
        })
        .then(result => {
            console.log(result);
        })
    }

    return (
        <>
            <div className="bg-white shadow d-block match-height">
                <div className="col px-4 py-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" class="href_url" value={post.post.result.ProjectId}  {...register("href_url")} />
                    <input type="hidden" class="referer_url" value="DIRECT"  {...register("referer_url")} />
                    <input type="hidden" class="developer" value={post.post.result.developer}  {...register("source_developer")} />
                    <input type="hidden" class="property_id" value={post.post.result.ProjectId}  {...register("source_project")} />
                    <input type="hidden" class="source" value={post.post.result.ProjectId}  {...register("source")} />
                    <input type="hidden" class="source_city" value={post.post.result.cityId}  {...register("source_city")} />
                    <h5>I AM INTERESTED IN </h5>
                    
                    {/* <div className=" mt-4 mb-4">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" for="inlineCheckbox1">1 BHK</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" for="inlineCheckbox2">2 BHK</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" for="inlineCheckbox2">3 BHK</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" for="inlineCheckbox2">4 BHK</label>
                    </div>
                    </div> */}

                    <div className="form-group">
                        {errors.name?.type === 'required' && <p className="alert alert-danger" role="alert">Name is required</p>}
                        <input className="form-control" placeholder="Enther the name" {...register("name",{required:true,maxLength: 40})} />
                    </div>
                    <div className="form-group">
                        {errors.email?.type === 'required' && <p className="alert alert-danger" role="alert">Eame is required</p>}
                        <input className="form-control"  placeholder="Enther the email"  {...register("email",{required:true})} />
                    </div>

                    <div className="form-group">
                        {errors.mobile1?.type === 'required' && <p className="alert alert-danger" role="alert">Phone is required</p>} 
                        <input className="form-control"  placeholder="Enther the phone"   {...register("mobile1",{required:true})}/>
                    </div>

                    <div className="form-group">
                        {errors.comments?.type === 'required' && <p className="alert alert-danger" role="alert">Comment is required</p>}
                        <textarea className="form-control"  placeholder="Enther the comment"  {...register("comments",{required:true})}></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block commontbtnclr">Request to call</button>
            </form>
                </div>
            </div>
        </>
    );
}
export default Propertylead_form;