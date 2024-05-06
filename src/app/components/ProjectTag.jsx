import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? 'border-purple-500' : "border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
    )
}
export default ProjectTag;