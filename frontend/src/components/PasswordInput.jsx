import React from "react";
import {Input} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function App({onInput}) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
    onChange={(evt) => {onInput(evt.target.value)}}
      label="Código"
      variant="bordered"
      placeholder="Ingresa tu código de acceso"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <FontAwesomeIcon className="text-2xl text-default-400 pointer-events-none" icon={faEye} />
          ) : (
            <FontAwesomeIcon className="text-2xl text-default-400 pointer-events-none" icon={faEyeSlash} />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      
    />
  );
}
