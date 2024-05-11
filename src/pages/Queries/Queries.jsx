import QueriesCard from "../../components/QueriesCard"
import SectionTitle from "../../components/SectionTitle"

const Queries = () => {
  return (
    <div>
         {/* Recent Queries */}
      <section className=" dark:bg-gray-900">
        <div className="container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div>
            <SectionTitle
              title={"Recent Queries"}
              subtitle={"You See The Recent Added Queries Here."}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QueriesCard />
            <QueriesCard />
            <QueriesCard />
            <QueriesCard />
            <QueriesCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Queries