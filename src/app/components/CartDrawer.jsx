
// 'use client';

// import { X, Plus, Minus } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function CartDrawer({ open, setOpen, items, setItems }) {
//   const router = useRouter();
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('cod');
//   const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });

//   const handleQuantity = (id, type) => {
//     setItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: type === 'add' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
//             }
//           : item
//       )
//     );
//   };

//   const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

//   const handlePlaceOrder = () => {
//     const order = {
//       items,
//       total,
//       address,
//       paymentMethod,
//       card: paymentMethod === 'card' ? cardDetails : null,
//       createdAt: new Date().toISOString(),
//     };

//     localStorage.setItem('order', JSON.stringify(order));

//     setTimeout(() => {
//       setOpen(false);
//       router.push('/place-order');
//     }, 1000);
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black z-40"
//             onClick={() => setOpen(false)}
//           />

//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 90 }}
//             className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 bg-[#121212] text-white p-6 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-xl font-bold text-yellow-300">Your Cart</h2>
//               <button onClick={() => setOpen(false)}><X className="text-yellow-300" /></button>
//             </div>

//             {items.length === 0 ? (
//               <p className="text-yellow-200">🛒 No items in cart.</p>
//             ) : (
//               <>
//                 {/* Selected Products */}
//                 <div className="space-y-4 max-h-[40vh] overflow-y-auto">
//                   {items.map((item) => (
//                     <div
//                       key={item.id}
//                       className="border border-yellow-400/10 p-3 rounded bg-[#1e1e2f] flex justify-between items-center"
//                     >
//                       <div>
//                         <h4 className="text-yellow-100">{item.name}</h4>
//                         <p className="text-yellow-400">${item.price} × {item.quantity} = ${item.price * item.quantity}</p>
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <button onClick={() => handleQuantity(item.id, 'sub')}><Minus size={16} /></button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => handleQuantity(item.id, 'add')}><Plus size={16} /></button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Address */}
//                 <div className="mt-4">
//                   <label className="text-sm text-yellow-200">Delivery Address</label>
//                   <textarea
//                     rows={2}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Enter address"
//                     className="w-full mt-1 p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
//                   />
//                 </div>

//                 {/* Payment Method */}
//                 <div className="mt-4">
//                   <label className="text-sm text-yellow-200">Payment Method</label>
//                   <select
//                     value={paymentMethod}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="w-full mt-1 p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
//                   >
//                     <option value="cod">Cash on Delivery</option>
//                     <option value="card">Credit / Debit Card</option>
//                   </select>
//                 </div>

//                 {/* Card Form (Conditional) */}
//                 {paymentMethod === 'card' && (
//                   <div className="mt-4 space-y-2">
//                     <input
//                       type="text"
//                       placeholder="Card Number"
//                       value={cardDetails.number}
//                       onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
//                       className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Expiry (MM/YY)"
//                       value={cardDetails.expiry}
//                       onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
//                       className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
//                     />
//                     <input
//                       type="text"
//                       placeholder="CVC"
//                       value={cardDetails.cvc}
//                       onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
//                       className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
//                     />
//                   </div>
//                 )}

//                 {/* Total & Button */}
//                 <div className="mt-6 border-t border-yellow-400/10 pt-4">
//                   <p className="text-lg font-bold text-yellow-300">Total: ${total.toFixed(2)}</p>
//                   <button
//                     onClick={handlePlaceOrder}
//                     disabled={!address || (paymentMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc))}
//                     className="mt-4 w-full bg-yellow-400 text-black py-2 font-bold rounded hover:bg-yellow-500 disabled:opacity-50"
//                   >
//                     Place Order
//                   </button>
//                 </div>
//               </>
//             )}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }



'use client';

import { X, Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartDrawer({ open, setOpen, items, setItems }) {
  const router = useRouter();

  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState(''); // ✅ Contact number
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });

  const handleQuantity = (id, type) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'add' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handlePlaceOrder = () => {
    const order = {
      items,
      total,
      address,
      contactNumber, // ✅ Save contact number in order
      paymentMethod,
      card: paymentMethod === 'card' ? cardDetails : null,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('order', JSON.stringify(order));

    setTimeout(() => {
      setOpen(false);
      router.push('/place-order');
    }, 1000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 90 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 bg-[#121212] text-white p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-yellow-300">Your Cart</h2>
              <button onClick={() => setOpen(false)}><X className="text-yellow-300" /></button>
            </div>

            {items.length === 0 ? (
              <p className="text-yellow-200">🛒 No items in cart.</p>
            ) : (
              <>
                {/* Selected Products */}
                <div className="space-y-4 max-h-[40vh] overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="border border-yellow-400/10 p-3 rounded bg-[#1e1e2f] flex justify-between items-center"
                    >
                      <div>
                        <h4 className="text-yellow-100">{item.name}</h4>
                        <p className="text-yellow-400">${item.price} × {item.quantity} = ${item.price * item.quantity}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <button onClick={() => handleQuantity(item.id, 'sub')}><Minus size={16} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantity(item.id, 'add')}><Plus size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm text-yellow-200">Delivery Address</label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter address"
                      className="w-full mt-1 p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                    />
                  </div>

                  {/* ✅ Contact Number Field */}
                  <div>
                    <label className="text-sm text-yellow-200">Contact Number</label>
                    <input
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="+92-3XX-XXXXXXX"
                      className="w-full mt-1 p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-4">
                  <label className="text-sm text-yellow-200">Payment Method</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full mt-1 p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="card">Credit / Debit Card</option>
                  </select>
                </div>

                {/* Card Form (Conditional) */}
                {paymentMethod === 'card' && (
                  <div className="mt-4 space-y-2">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                    />
                    <input
                      type="text"
                      placeholder="Expiry (MM/YY)"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      value={cardDetails.cvc}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                      className="w-full p-2 rounded bg-[#1a1a2a] border border-yellow-300/10"
                    />
                  </div>
                )}

                {/* Total & Button */}
                <div className="mt-6 border-t border-yellow-400/10 pt-4">
                  <p className="text-lg font-bold text-yellow-300">Total: ${total.toFixed(2)}</p>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={
                      !address ||
                      !contactNumber ||
                      (paymentMethod === 'card' &&
                        (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc))
                    }
                    className="mt-4 w-full bg-yellow-400 text-black py-2 font-bold rounded hover:bg-yellow-500 disabled:opacity-50"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
