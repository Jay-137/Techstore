import React from "react";

const CartItem=({item,onRemove})=>{
  console.log(`Rendering CartItem: ${item.title}`)
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            
        <div className="flex items-center gap-4 flex-1 min-w-0">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-white rounded" />
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-bold text-lg text-gray-800 dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button 
                onClick={()=>{
                  onRemove(item.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors cursor-pointer"
              >
                Remove 1
              </button>
            </div>
            

          </div>
  );
}
export default React.memo(CartItem);