import React from "react"

export default (ref: React.RefObject<HTMLDivElement>, callback: any) => {
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
}