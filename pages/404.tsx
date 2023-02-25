import styled from "styled-components"
import { Layout } from "@components"
import Link from "next/link"

const StyledNotFound = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20px;

  h1 {
    padding: 30px 0 0;
    margin: 0;
    font-size: 200px;

    @media (max-width: 768px) {
      font-size: 150px;
    }

    @media (max-width: 480px) {
      font-size: 100px;
    }
  }

  span {
    padding: 0 0 30px;
    font-size: 35px;
    color: var(--green);

    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  button {
    margin: 0 auto;
    font-size: 15px;
    width: 150px;

    @media (max-width: 768px) {
      font-size: 12px;
      width: 120px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      width: 110px;
    }
  }
`

export default function NotFound() {
  return (
    <Layout>
      <Link href="/">
        <StyledNotFound>
          <h1>404</h1>
          <span>Page Not Found</span>
          <button>Go Home</button>
        </StyledNotFound>
      </Link>
    </Layout>
  )
}
