
// 'use client';
// import { useEffect, useState } from 'react';

// export default function PlaceOrderPage() {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const data = localStorage.getItem('order');
//     if (data) setOrder(JSON.parse(data));
//   }, []);

//   if (!order) return <div className="p-6 text-white">Loading order...</div>;

//   const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toDateString();

//   return (
//     <div className="min-h-screen bg-[#0f0f1a] text-white p-6">
//       <h1 className="text-2xl font-bold text-yellow-300 mb-4">✅ Order Placed Successfully</h1>

//       <div className="bg-[#1c1c2a] p-4 rounded-lg space-y-4">
//         <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
//         <p><strong>Delivery Address:</strong> {order.address}</p>
//         <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>

//         <h2 className="text-lg font-semibold text-yellow-300 mt-4">Products:</h2>
//         <ul className="space-y-2">
//           {order.items.map(item => (
//             <li key={item.id} className="flex justify-between border-b border-yellow-400/10 pb-2">
//               <span>{item.name} × {item.quantity}</span>
//               <span>${item.price * item.quantity}</span>
//             </li>
//           ))}
//         </ul>

//         <p className="mt-4 text-lg font-bold text-yellow-200">Total: ${order.total.toFixed(2)}</p>
//         <p className="text-sm text-green-300">🚚 Estimated Delivery: {estimatedDelivery}</p>
//         <p className="text-sm text-yellow-400">📞 Rider: +92-301-XXXXXXX</p>
//       </div>
//     </div>
//   );
// }


'use client';
import { useEffect, useState } from 'react';

export default function PlaceOrderPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('order');
    if (data) setOrder(JSON.parse(data));
  }, []);

  if (!order) return <div className="p-6 text-white">Loading order...</div>;

  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toDateString();

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-6">
      <h1 className="text-2xl font-bold text-yellow-300 mb-4">✅ Order Placed Successfully</h1>

      <div className="bg-[#1c1c2a] p-4 rounded-lg space-y-4">
        <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        <p><strong>Delivery Address:</strong> {order.address}</p>
        <p><strong>Contact Number:</strong> {order.contactNumber}</p> {/* ✅ Added */}
        <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>

        <h2 className="text-lg font-semibold text-yellow-300 mt-4">Products:</h2>
        <ul className="space-y-2">
          {order.items.map(item => (
            <li key={item.id} className="flex justify-between border-b border-yellow-400/10 pb-2">
              <span>{item.name} × {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-lg font-bold text-yellow-200">Total: ${order.total.toFixed(2)}</p>
        <p className="text-sm text-green-300">🚚 Estimated Delivery: {estimatedDelivery}</p>
        <p className="text-sm text-yellow-400">📞 Rider: +92-301-XXXXXXX</p>
      </div>
    </div>
  );
}
