export default function ProfilePage() {

  const 

  return (
    <div className="flex flex-col items-center justify-center min-h-hscreen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4"
      >
        Logout
      </button>
    </div>
  );
}
