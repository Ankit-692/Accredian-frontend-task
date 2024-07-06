function Header() {
  return (
    <div className="bg-second mt-6 mx-8 h-16 rounded-lg flex flex-row-reverse p-3 rw:mx-3 rw:flex-col rw:gap-2 rw:border-solid rw:border-4 rw:border-second-2">
      <p className="absolute inset-x-0 top-9 text-4xl text-white font-black italic font-mono rw:text-xl rw:relative rw:top-0 rw:font-black">
        Refer N Earn Assignment
      </p>
      <button className="bg-second-2 mx-5 px-5 rounded-lg text-white shadow-lg z-50 font-semibold rw:p-3 rw:text-sm rw:font-medium rw:w-full rw:mx-0">
        Sign Up
      </button>
      <button className="bg-second-2 mx-5 px-5 rounded-lg text-white shadow-lg z-50 font-semibold rw:p-3 rw:text-sm rw:font-medium rw:w-full rw:mx-0">
        Login
      </button>
    </div>
  );
}

export default Header;
