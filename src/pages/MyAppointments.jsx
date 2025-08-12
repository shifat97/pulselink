import AppointedDoctor from "../templates/AppointedDoctor";

export default function MyAppointment() {
  const fakeData = [
    {
      appointedDoctorID: "1",
      appointmentDate: "25, July, 2024",
      appointmentTime: "8:30 PM",
      isPaid: true,
    },
    {
      appointedDoctorID: "1",
      appointmentDate: "25, July, 2024",
      appointmentTime: "8:30 PM",
      isPaid: false,
    },
  ];
  return (
    <section className="my-appointment mt-[150px]">
      <h1 className="text-2xl text-gray1 font-medium uppercase">
        My Appointments
      </h1>

      <div>
        {fakeData.map((item, index) => (
          <AppointedDoctor doctor={item} key={index} />
        ))}
      </div>
    </section>
  );
}
