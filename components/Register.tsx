import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { pricingPackage } from "@/constants";

declare global {
  interface Window {
    snap: any;
  }
}
const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
    noWa: "",
    email: "",
    payment: 0,
  });
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const [isNoWaAvailable, setIsNoWaAvailable] = useState<boolean | null>(null);
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(null);

  const [usernameError, setUsernameError] = useState("");
  const [noWaError, setNoWaError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataPackage, setDataPackage] = useState<null>(null)

  const searchParams = useSearchParams();
  const packageId = searchParams.get("product_id");

  const existingUsernames: any[] = [];
  const existingNoWa: any[] = [];
  const existingEmail: any[] = [];

  const handleApplyVoucher = () => {
    if (voucher === "DISKON50") {
      setDiscount(50000);
      setVoucherApplied(true);
    } else {
      setDiscount(0);
      setErrorMessage("Kode voucher tidak valid!");
    }
  };

  const handleRemoveVoucher = () => {
    setDiscount(0);
    setVoucher("");
    setVoucherApplied(false); // Tampilkan kembali input voucher
    setErrorMessage("");
  };

  useEffect(() => {
    if (!formData.username || usernameError) {
      setIsAvailable(null);
      setIsUsernameAvailable(null);
      return;
    }

    // Simulasi pengecekan ketersediaan domain (gantilah dengan API fetch jika perlu)
    const checkAvailability = !existingUsernames.includes(formData.username.toLowerCase());
    setIsAvailable(checkAvailability);
    setIsUsernameAvailable(checkAvailability);
  }, [formData.username]);

  useEffect(() => {
    if (!formData.noWa || noWaError) {
      setIsNoWaAvailable(null);
      return;
    }
    const checkAvailability = !existingNoWa.includes(formData.noWa.toLowerCase());
    setNoWaError(checkAvailability ? "" : "No telephone yang anda masukan sudah terdaftar");
  }, [formData.noWa]);

  useEffect(() => {
    if (!formData.email || emailError) {
      setIsNoWaAvailable(null);
      return;
    }
    const checkAvailability = !existingEmail.includes(formData.email.toLowerCase());
    setEmailError(checkAvailability ? "" : "Email yang anda masukan sudah terdaftar");
  }, [formData.email]);

  useEffect(() => {
    if (packageId) {
      const selectedPackage = pricingPackage.find((item) => item.id === packageId);

      if (selectedPackage) {
        setDataPackage(selectedPackage as any)
        setFormData((prevData) => ({
          ...prevData,
          payment: selectedPackage.package_price_discount ?? 0,
        }));
      }
    }
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "noWa") {
      const regex = /^08\d{8,11}$/;
      if (!regex.test(value) && value !== "") {
        setNoWaError("Masukkan nomor yang valid (08xxxxxxxxxx)");
      } else {
        setNoWaError("");
      }
    }
    if (name === "username") {
      const usernameRegex = /^[a-zA-Z0-9]{1,25}$/;

      if (value.length > 20) {
        setUsernameError("Username maksimal 20 karakter");
      } else if (!usernameRegex.test(value)) {
        setUsernameError(
          "Username hanya boleh huruf dan angka (tanpa spasi atau simbol)"
        );
      } else {
        setUsernameError(""); // Reset error jika valid
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Tambahkan Midtrans Snap Script
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client-3B3nT-4COo92eu5T");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (
      !formData?.email ||
      !formData?.fullname ||
      !formData?.username ||
      !formData?.noWa ||
      !formData?.payment ||
      !formData?.password
    ) {
      console.error("Data pembayaran tidak lengkap!");
      return;
    }
  
    const orderId = `ORDER-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
  
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullname,
          password: formData.password,
          role: "sales",
          username: formData.username,
          whatsapp_number: formData.noWa,
          order_id: orderId,
          gross_amount: formData.payment,
          product_id: dataPackage?.id as any,
        }),
      });
  
      if (!response.ok) {
        const result = await response.json()
        throw new Error(result?.message || "Gagal melakukan registrasi pengguna");
      }
  
      const responseData = await response.json();
      console.log("Registrasi berhasil:", responseData);
  
      // Try kedua: Mendapatkan token pembayaran
      try {
        const response2 = await fetch("/api/midtrans", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: orderId,
            gross_amount: formData.payment,
            customer_name: formData.fullname,
            email: formData.email,
            phone: formData.noWa,
          }),
        });
  
        if (!response2.ok) {
          throw new Error("Gagal mendapatkan token pembayaran");
        }
  
        const paymentData = await response2.json();
  
        if (paymentData.token) {
          localStorage.setItem("token", paymentData.token);
          localStorage.setItem("email", formData.email);
          console.log("Token pembayaran berhasil diterima:", paymentData.token);
          window.snap.pay(paymentData.token);
        } else {
          throw new Error("Token pembayaran tidak ditemukan");
        }
      } catch (error) {
        console.error("Error saat mendapatkan token pembayaran:", error);
      }
    } catch (error) {
      console.log('error catch: ', error)
      console.error("Error catch saat registrasi pengguna:", error);
    }
  };  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 0,
    })
      .format(amount)
      .replace(/\./g, ","); // Ubah titik ke koma (opsional, sesuai format lokal)
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-6 p-4 sm:flex-row sm:justify-center sm:items-start">
      <div className="w-full max-w-sm sm:max-w-lg bg-white p-6 rounded-lg shadow-md border">
        <h2 className="font-poppins text-2xl font-semibold text-gray-800 mb-4 text-center">
          Registration Sales
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 font-poppins">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border font-poppins rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              maxLength={25}
              required
            />
            {formData.username && (
              <div className="mt-2 font-poppins flex items-center space-x-2 text-gray-600">
                {usernameError ? (
                  <p className="text-blue-600 font-semibold">
                    {formData.username}.iniaga.com
                  </p>
                ) : (
                  <>
                    <p>Domain:</p>
                    <p className="text-blue-600 font-semibold">
                      {formData.username}.iniaga.com
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-poppins">Fullname</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full p-3 border font-poppins rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter fullname"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-poppins">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border font-poppins rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-poppins">No WhatsApp</label>
            <input
              type="text"
              name="noWa"
              value={formData.noWa}
              onChange={handleChange}
              className="w-full p-3 border font-poppins rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter WhatsApp number"
              required
            />
          </div>

          {/** Email */}
          <div>
            <label className="text-gray-700 font-poppins">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border font-poppins rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
        </form>

        <button
          type="submit"
          disabled={
            !formData?.email ||
            !formData?.fullname ||
            !formData?.username ||
            !formData?.noWa ||
            !formData?.payment ||
            !formData?.password
          }
          onClick={handlePayment}
          className={`w-full font-poppins font-semibold py-3 mt-3 rounded-md transition ${
            !formData?.email ||
            !formData?.fullname ||
            !formData?.username ||
            !formData?.noWa ||
            !formData?.payment ||
            !formData?.password
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Submit
        </button>
      </div>

      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border sm:mt-0">
        <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>

        {!voucherApplied ? (
          <div className="mb-4">
            <input
              type="text"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              placeholder="Masukkan kode voucher"
              className="w-full font-poppins p-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
            {errorMessage && (
              <p className="text-red-500 font-poppins text-sm mt-2">{errorMessage}</p> // Alert error muncul di bawah input
            )}
            <button
              onClick={handleApplyVoucher}
              className="w-full mt-2 bg-blue-500 font-poppins text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Gunakan
            </button>
          </div>
        ) : (
          <button
            onClick={handleRemoveVoucher}
            className="w-full bg-red-500 font-poppins text-white p-2 rounded-lg hover:bg-red-600 mb-4"
          >
            Cancel Voucher
          </button>
        )}

        <div className="flex font-poppins justify-between items-center mb-2">
          <span>Subtotal</span>
          <span>Rp {formatRupiah(formData.payment)}</span>
        </div>
        <div className="flex font-poppins justify-between items-center mb-2">
          <span>Delivery</span>
          <span>Rp 0</span>
        </div>

        {discount > 0 && (
          <div className="flex font-poppins justify-between items-center mb-2 text-red-500">
            <span>Diskon</span>
            <span>- Rp {formatRupiah(discount)}</span>
          </div>
        )}

        <div className="flex font-poppins justify-between items-center font-bold text-lg mt-4 border-t pt-4">
          <span>Total</span>
          <span className="text-green-600">
            Rp {formatRupiah(formData.payment - discount)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
