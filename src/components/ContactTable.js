import ContactsCard from "./ContactsCard";

export default function ContactTable({
  searchedContactsName,
  data,
  filteredContacts,
  handleViewShow,
  setRowData,
  handleEditShow,
  handleDelete,
  setId,
  setDelete,
  setViewShow,
}) {
  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Number</th>
              <th>Menue</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data
                .filter(filteredContacts(searchedContactsName))
                .map((contact) => (
                  <ContactsCard
                    key={contact._id}
                    contact={contact}
                    handleViewShow={handleViewShow}
                    setRowData={setRowData}
                    handleEditShow={handleEditShow}
                    handleDelete={handleDelete}
                    setId={setId}
                    setDelete={setDelete}
                    setViewShow={setViewShow}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
