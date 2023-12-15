import React from "react";
import useProviders from "../../hooks/useProviders";
import { FaTrash } from "react-icons/fa";

function ProvidersRender() {
  const { providers, deleteProvider } = useProviders();

  return (
    <div>
      {providers.map((provider) => (
        <div
          key={provider.id}
          className="flex justify-between items-center border-b shadow-sm p-2"
        >
          <div>
            <p>{provider.name}</p>
            <span className="text-xs text-gray-300">{provider.id}</span>
          </div>
            <button className="text-danger" onClick={() => deleteProvider(provider.id)}>
              <FaTrash />
            </button>
        </div>
      ))}
    </div>
  );
}

export default ProvidersRender;
