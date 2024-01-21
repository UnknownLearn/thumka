import { persons } from "./lib/data";
import { Person } from "./lib/definitions";

const PersonTree: React.FC<{ person: Person }> = ({ person }) => {
  const children = persons.filter((p) => p.parentId === person.id);

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
      <div>
        {`${person.name}'s Children:`}
        <ul>
          {children.map((child) => (
            <li key={child.id}>
              <PersonTree person={child} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const rootPersons = persons.filter((p) => !p.parentId);

  return (
    <div>
      <h1>Family Tree</h1>
      <ul>
        {rootPersons.map((rootPerson) => (
          <li key={rootPerson.id}>
            <div>
              <strong>{rootPerson.name}</strong>
            </div>
            <PersonTree person={rootPerson} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;