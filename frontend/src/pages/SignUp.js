import Header from "../components/Header"
import Footer from "../components/Footer"
import Back from "../assets/signUpBack2.jpg"

const SignUp = () => {
   return (
      <>
         <Header />
         <section
            className="bg-image backSignUp d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${Back})` }}
         >
            <h1>ESTOY EN SIGNUP</h1>
         </section>
         <Footer />
      </>
   )
}

export default SignUp
