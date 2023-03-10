import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3">test</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              お名前
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              メールアドレス
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              お名前
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button type="submit" className="btn btn-danger">
            送信
          </button>
        </form>
      </div>
    </>
  );
}
