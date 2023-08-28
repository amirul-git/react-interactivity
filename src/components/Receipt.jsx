export default function Receipt({ price }) {
  return (
    <>
      <section className="border-4 border-green-400 text-center p-4 mt-4 border-dashed font-bold text-lg rounded-md">
        <p>Get your personal beach today for only ${price}.00</p>
      </section>
      ;
    </>
  );
}
