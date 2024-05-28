

export const TextInput = ({ label, placeholder, type, onChange }:{
    label: string;
    placeholder: string;
    type: string,
    onChange: any
    }) =>{
    return <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input onChange={onChange} type={type}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div> 
}
