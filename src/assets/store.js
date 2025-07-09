import { create } from "zustand";
import axios from "axios";

const useData = create((set, get) => ({
  data: [],
  originalData: [],
  input: "",
  key: "",
  profile: null,
  message: "",
  messageList: [],
  scrollTriger: false,

  fetchData: async () => {
    try {
      const temp = get().data;
      if (temp.length === 0) {
        const res = await axios.get("./Data.json");
        set({ data: res.data });
        set({ originalData: res.data });
      } else return;
    } catch (err) {
      console.log("Error find in fetch", err);
    }
  },
  filterByName: (string) => {
    const temp = get().originalData;
    const filtered = temp.filter((item) =>
      item.Name.toLowerCase()
        .split(" ")
        .some((part) => part.includes(string.toLowerCase()))
    );
    set({ data: filtered });
  },
  backToOringinal: () => {
    set({ data: get().originalData });
  },
  setInput: (string) => {
    set({ input: string });
  },
  setKey: (num) => {
    set({ key: String(num) });
    console.log(get().key);
  },
  setProfile: (num) => {
    const temp = get().originalData.find(
      (item) => String(num) === String(item.Key)
    );
    console.log("Looking for key:", num);
    console.log("Found profile:", temp);
    set({ profile: { ...temp } });
  },
  setMessage: (string) => {
    set({ message: string });
  },
  setMessageList: (string) => {
    set({ messageList: string });
  },
  clearMessageList: () => {
    set({ messageList: [] });
  },
  setScrollTriger: () => {
    const temp= get().scrollTriger;
    set({ scrollTriger:!temp});
  },
  updateSeen:(Key,currentTime)=>{
    const temp= get().originalData;
   const obj= temp.map((item)=>(item.Key===Key?
    {...item,Time:currentTime}
    :item))
    set({originalData:obj});
  }
}));
export default useData;
