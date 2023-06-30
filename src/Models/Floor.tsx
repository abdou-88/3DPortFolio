


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};




const Floor: React.FC<Props> = () => {





    return (

        <>
            <mesh
                scale={4}
                position={[4, 0, -1]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            >
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[-3, 0, -1]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 5, 2]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[-1.5, 0, 7]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[6, 0, 5.5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 5]}
            >
                <ringGeometry args={[0.9, 1, 6, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[9, 0, -5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            >
                <ringGeometry args={[0.9, 1, 5, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[11, 0, 10]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 3, 2]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[-11, 0, 5]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 6, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[3, 0, 14]}
                rotation={[-Math.PI / 2, 0, Math.PI / 5]}
            >
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[15, 0, 2]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 4, 2]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[-7, 0, 14]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
            >
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>

            <mesh
                scale={4}
                position={[3, 0, 14]}
                rotation={[-Math.PI / 2, 0, Math.PI / 5]}
            >
                <ringGeometry args={[0.9, 1, 4, 1]} />
                <meshStandardMaterial color="black" roughness={0.75} />
            </mesh>
        </>

    );
};




export default Floor;
