import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { captureAndFinalizePaymentService } from "@/services";
import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

function PaypalPaymentReturnPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (paymentId && payerId) {
      async function capturePayment() {
        const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));
        const response = await captureAndFinalizePaymentService(
          paymentId,
          payerId,
          orderId
        );

        if (response?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/student-courses";
        }
      }
      capturePayment();
    }
  }, [payerId, paymentId]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="p-6 text-center shadow-lg rounded-lg bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Processing payment... Please wait
          </CardTitle>
        </CardHeader>
        <div className="mt-4 flex items-center justify-center">
          <TailSpin
            visible={true}
            height="60"
            width="60"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />{" "}
          {/* Spinner component */}
        </div>
      </Card>
    </div>
  );
}

export default PaypalPaymentReturnPage;
