"use client"

type InputProps = {
    type?: string,
    placeholder?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
}: InputProps)
{
    return(
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full outline-none bg-[#D9D9D9] rounded-[70px]
                py-[0.4rem] px-[0.7rem] text-[#797979] text-sm max-w-[23rem]"
            />
    )
}