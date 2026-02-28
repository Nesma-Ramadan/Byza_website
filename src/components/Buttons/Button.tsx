import type { JSX } from "react"
import type { ButtonProps, } from "./type"




export default function Button({ size, type, text, icon, className, onClick }:  ButtonProps): JSX.Element  {


    const buttonOption ={
     size:{
        xs: "text-[12px] px-[8px] py-[4px]",
        sm: "text-sm px-[16px] py-[8px]",
        md: "text-[16px] px-[24px] py-[12px]",
        lg: "text-[16px] px-[32px] py-[16px]",
        xl: "text-[24px] px-[64px] py-[32px]",
    },


     type:{
        primary: "  bg-primary rounded-lg outline-2 outline-primary  font-semibold text-white px-6 py-2 capitaliz cursor-pointer  hover:bg-secondary hover:text-text-2 hover:outline-secondary " ,
        secondary: "outline-2 outline-primary rounded-lg font-semibold text-primary capitalize hover:outline-secondary hover:text-text-2 cursor-pointer" ,
        icon: "text-primary hover:text-secondary text-3xl cursor-pointer",
    },

    text:text,
    icon:icon||null,
    className:className||""
    }
    



    return (
        <>

            <button
                onClick={onClick}
                className={`flex items-center justify-center capitalize ${buttonOption.type[type]} ${buttonOption.size[size]} ${buttonOption.className}`}>

                {icon && <span className="me-2 text-2xl">{icon}</span>}
                {text && <span>{text}</span>}

            </button>

        </>
    )
}

