

const DlButton = () => {
  return (
    <div className="h-screen bg-white dark:bg-black dark:text-white text-black">
      <button className="cursor-pointer" onClick={() => {
        document.querySelector("html")?.classList.toggle("dark")
      }}> Toggle Theme </button>
    </div>
  )
}

export default DlButton
