class Validation
{
    constructor(){
        this.number_regex = /^[0-9]*$/;
        this.mobile_regex  = /^[0-9]{10}$/;
        this.aadhar_regex  = /^[0-9]{12}$/;
        this.aadhar_space_regex  = /^[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/;

        this.string_regex  = /^[a-zA-Z_]*$/;
        this.name_regex  = /^[a-zA-Z^\s]{2,}[a-zA-Z]$/;

        this.email_regex = /^[0-9a-zA-Z]{3,}[@][a-zA-Z]{2,}[\.][a-zA-Z]{2,}$/;
    }

    number = (value='')=>{
        if(value.match(this.number_regex)){
            return true;
        }else{
            return false;
        }
    }

    name = (value='')=>{
        if(value.match(this.name_regex)){
            return true;
        }else{
            return false;
        }
    }
    
    mobile = (value='')=>{
        if(value.match(this.mobile_regex)){
            return true;
        }else{
            return false;
        }
    }

    email = (value='')=>{
        if(value.match(this.email_regex)){
            return true;
        }else{
            return false;
        }
    }
    
    aadhar = (value='')=>{
        if(value.match(this.aadhar_regex)){
            return true;
        }else{
            return false;
        }
    }
    
    aadharSpaceSeparator = (value='')=>{
        if(value.match(this.aadhar_space_regex)){
            return true;
        }else{
            return false;
        }
    }
    
}

export {Validation};