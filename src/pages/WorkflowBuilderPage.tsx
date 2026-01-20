import { useCallback, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, Play, Clock, Zap, GitBranch, Fan, Lightbulb, Filter, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Custom Node Components
function TriggerNode({ data }: { data: { label: string; interval?: number } }) {
  return (
    <div className="bg-card border-2 border-warning rounded-lg shadow-sm min-w-[180px]">
      <div className="bg-warning/10 px-4 py-2 border-b border-warning/20 flex items-center gap-2">
        <Clock className="w-4 h-4 text-warning" />
        <span className="text-sm font-medium text-warning">{data.label}</span>
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">Every</div>
        <div className="text-lg font-semibold text-foreground">{data.interval || 60} seconds</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-warning" />
    </div>
  );
}

function ConditionNode({ data }: { data: { label: string } }) {
  return (
    <div className="bg-card border-2 border-purple-500 rounded-lg shadow-sm min-w-[180px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-purple-500" />
      <div className="bg-purple-500/10 px-4 py-2 border-b border-purple-500/20 flex items-center gap-2">
        <GitBranch className="w-4 h-4 text-purple-500" />
        <span className="text-sm font-medium text-purple-500">{data.label}</span>
      </div>
      <div className="p-4 text-sm text-foreground">VPD &gt; 1.2 kPa</div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-purple-500" />
    </div>
  );
}

function ActionNode({ data }: { data: { label: string; value?: number } }) {
  return (
    <div className="bg-card border-2 border-destructive rounded-lg shadow-sm min-w-[180px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-destructive" />
      <div className="bg-destructive/10 px-4 py-2 border-b border-destructive/20 flex items-center gap-2">
        <Fan className="w-4 h-4 text-destructive" />
        <span className="text-sm font-medium text-destructive">{data.label}</span>
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">Set to</div>
        <div className="text-lg font-semibold text-foreground">{data.value || 75}%</div>
      </div>
    </div>
  );
}

const nodeTypes = { trigger: TriggerNode, condition: ConditionNode, action: ActionNode };

const initialNodes: Node[] = [
  { id: "1", type: "trigger", position: { x: 250, y: 50 }, data: { label: "Timer Trigger", interval: 60 } },
  { id: "2", type: "condition", position: { x: 250, y: 200 }, data: { label: "Check VPD" } },
  { id: "3", type: "action", position: { x: 250, y: 350 }, data: { label: "Set Fan Speed", value: 75 } },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const paletteItems = [
  { type: "trigger", label: "Timer", icon: Clock, color: "warning" },
  { type: "trigger", label: "Sensor", icon: Zap, color: "warning" },
  { type: "condition", label: "If/Then", icon: GitBranch, color: "purple-500" },
  { type: "condition", label: "Compare", icon: Filter, color: "purple-500" },
  { type: "action", label: "Set Fan", icon: Fan, color: "destructive" },
  { type: "action", label: "Set Light", icon: Lightbulb, color: "destructive" },
];

export default function WorkflowBuilderPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), [setEdges]);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/automations"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <Input defaultValue="VPD Control Workflow" className="w-64 h-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Save className="h-4 w-4 mr-2" />Save</Button>
          <Button size="sm"><Play className="h-4 w-4 mr-2" />Activate</Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Node Palette */}
        <div className="w-56 bg-muted/30 border-r border-border p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Node Palette</h3>
          <div className="space-y-4">
            {["trigger", "condition", "action"].map((type) => (
              <div key={type}>
                <h4 className="text-xs font-medium text-muted-foreground uppercase mb-2">{type}s</h4>
                <div className="space-y-2">
                  {paletteItems.filter((i) => i.type === type).map((item) => (
                    <div key={item.label} className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-md cursor-grab hover:border-primary">
                      <div className={cn("p-1.5 rounded", `bg-${item.color}/10 text-${item.color}`)}><item.icon className="w-4 h-4" /></div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1">
          <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} onNodeClick={(_, node) => setSelectedNode(node)} fitView className="bg-muted/20">
            <Background gap={16} size={1} color="hsl(var(--border))" />
            <Controls className="bg-card border border-border rounded-md shadow-sm" />
            <MiniMap className="bg-card border border-border rounded-md shadow-sm" nodeColor={(n) => n.type === "trigger" ? "#f59e0b" : n.type === "condition" ? "#a855f7" : "#ef4444"} />
          </ReactFlow>
        </div>

        {/* Inspector */}
        <div className="w-72 bg-card border-l border-border p-6">
          {selectedNode ? (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{selectedNode.data.label}</h3>
              <div className="space-y-4">
                <div><Label>Interval</Label><div className="flex gap-2 mt-1"><Input type="number" defaultValue={60} className="w-20" /><Select defaultValue="seconds"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="seconds">seconds</SelectItem><SelectItem value="minutes">minutes</SelectItem></SelectContent></Select></div></div>
                <Button className="w-full">Update Node</Button>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground mt-8"><Box className="w-12 h-12 mx-auto mb-3 opacity-50" /><p className="text-sm">Select a node to edit</p></div>
          )}
        </div>
      </div>
    </div>
  );
}
