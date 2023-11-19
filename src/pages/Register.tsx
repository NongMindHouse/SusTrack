import RegisForm from "@/components/Register/RegisForm";

const Register = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-col relative">
      <section className="w-full bg-hero bg-cover bg-center py-24 h-screen">
        <RegisForm />
      </section>
    </div>
  );
};

export default Register;
